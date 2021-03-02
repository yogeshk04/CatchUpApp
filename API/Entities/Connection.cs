namespace API.Entities
{
    public class Connection
    {
        public Connection()
        {
        }

        public Connection(string connectionId, string usernmae)
        {
            ConnectionId = connectionId;
            Usernmae = usernmae;
        }

        public string ConnectionId { get; set; }
        public string Usernmae { get; set; }
    }
}