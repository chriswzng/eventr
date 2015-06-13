using Eventr.API.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Eventr.API.Controllers
{
    [RoutePrefix("auth")]
    public class AuthController : ApiController
    {
        [Route("register")]
        [HttpPost]
        public bool Register([FromBody] object obj)
        {
            UserService userService = new UserService();
            return userService.AddUser(obj);
        }
    }
}
