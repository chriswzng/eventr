using Eventr.API.Authorization;
using Eventr.API.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Eventr.API.Controllers
{
<<<<<<< HEAD
    //[HttpAuthorizeAttribute]
=======
>>>>>>> 9db1cfb48fb354ce14a8b98b33a2ad4433e7d29a
    [RoutePrefix("venue")]
    public class VenueController : ApiController
    {
        [HttpGet]
        [Route("get")]
        public IEnumerable<object> GetVenues()
        {
            VenueService venueService = new VenueService();
            return venueService.GetVenues();
        }
    }
}
