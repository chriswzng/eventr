using EventrAPI.Models;
using EventrAPI.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EventrAPI.Services
{
    public class UserService
    {
        public bool AddUser()
        {
            UserEnt newUserEnt = new UserEnt();
            newUserEnt.Id = Guid.NewGuid();
            newUserEnt.firstName = "Support";
            newUserEnt.lastName = "Admin";
            newUserEnt.email = "test@test.com";
            newUserEnt.token = BCrypt.Net.BCrypt.HashPassword("Abc123", BCrypt.Net.BCrypt.GenerateSalt());

            UserRepository userRepository = new UserRepository();
            return userRepository.AddUser(newUserEnt);
        }
    }
}