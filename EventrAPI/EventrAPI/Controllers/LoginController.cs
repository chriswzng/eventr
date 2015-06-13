using EventrAPI.Authorization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EventrAPI.Controllers
{
    [HttpAuthorizeAttribute]
    [RoutePrefix("login")]
    public class LoginController : ApiController
    {
        [Route("get")]
        [HttpGet]
        public bool Login()
        {
            return true;
        }
    }
}
