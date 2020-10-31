using System.Collections.Generic;
using System.Security.Cryptography;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class Seed
    {
        public static async Task SeedUsers(DataContext context)
        {
            if (await context.Users.AnyAsync()) return;

            var userData = await System.IO.File.ReadAllTextAsync("Data/UserSeedDatal.json");
            var users = JsonSerializer.Deserialize<List<AppUser>>(userData);

            foreach (var user in users)
            {
                using var hmack = new HMACSHA512();

                user.UserName = user.UserName.ToLower();
                user.PasswordHash = hmack.ComputeHash(Encoding.UTF8.GetBytes("Pass"));
                user.PasswordSalt = hmack.Key;

                context.Users.Add(user);
            }

            await context.SaveChangesAsync();
        }
    }
}