using Eventr.API.Authorization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Eventr.API.Controllers
{
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
