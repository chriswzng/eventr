using EventrAPI.Models;
using EventrAPI.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace EventrAPI.Services
{
    public class VenueService
    {
        internal IEnumerable<object> GetVenues()
        {
            VenueRepository venueRepository = new VenueRepository();
            List<VenueEnt> venueEnts = venueRepository.GetVenues();
            return ConvertToContract(venueEnts);
        }

        private IEnumerable<object> ConvertToContract(IEnumerable<VenueEnt> venues)
        {
            throw new NotImplementedException();
        }

        private object ConvertToContract(object venue)
        {
            throw new NotImplementedException();
        }
    }
}