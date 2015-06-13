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
