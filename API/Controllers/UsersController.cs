using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Controllers;
using API.Data;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.API.Controllers
{
    [Authorize]
    public class UsersController : BaseApiController
    {
        private readonly IUserRepository _userRepo;
        private readonly IMapper _mapper;
        public UsersController(IUserRepository userRepo, IMapper mapper)
        {
            _mapper = mapper;
            _userRepo = userRepo;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<MemberDto>>> GetUsers()
        {
            var users = await _userRepo.GetMembersAsync();
            return Ok(users);
            //return await _userRepo.GetUserAsync();
        }

        // [HttpGet("{id}")]
        // public async Task<ActionResult<AppUser>> GetUser(int id)
        // {
        //     return await _userRepo.GetUserByIdAsync();
        // }

        [HttpGet("{username}")]
        public async Task<ActionResult<MemberDto>> GetUser(string username)
        {
            return await _userRepo.GetMemberAsync(username);
        }
    }
}