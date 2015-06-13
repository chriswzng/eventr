using Eventr.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Eventr.API.Repositories
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