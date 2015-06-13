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
        public bool Register()
        {
            return true;
        }

        [Route("login")]
        [HttpPost]
        public bool Login()
        {
            return true;
        }
    }
}
