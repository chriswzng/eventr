using Eventr.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Eventr.API.Repositories
{
    public class AuthRepository : BaseRepository
    {
        public AuthRepository() : base()
        {
        }

        internal Guid GetUserIdByUsername(string username)
        {
            Guid userId = DataContext.UserEnts.Where(u => u.email == username).Select(u => u.Id).FirstOrDefault();
            return userId;
        }

        internal bool CheckLoginCredentials(string email, string username, string password)
        {
            IEnumerable<UserEnt> userEnts = DataContext.UserEnts.Where(u => u.email == email).ToList();
            if (userEnts.Count() != 1) return false;
            return BCrypt.Net.BCrypt.Verify(password, userEnts.First().token);
        }

        internal bool CheckForDuplicate(string email)
        {
            return DataContext.UserEnts.Any(u => u.email == email);
        }
    }
}