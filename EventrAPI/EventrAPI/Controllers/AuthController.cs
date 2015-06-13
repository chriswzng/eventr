using EventrAPI.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EventrAPI.Controllers
{
    [RoutePrefix("auth")]
    public class AuthController : ApiController
    {
        [Route("register")]
        [HttpGet]
        public bool Register()
        {
            UserService userService = new UserService();
            return userService.AddUser();
        }
    }
}
