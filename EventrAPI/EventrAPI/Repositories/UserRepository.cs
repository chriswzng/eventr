using EventrAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EventrAPI.Repositories
{
    public class UserRepository : BaseRepository
    {
        public UserRepository() : base()
        {
        }

        internal bool AddUser(UserEnt userEnt)
        {
            DataContext.UserEnts.Add(userEnt);
            return Commit();
        }
    }
}