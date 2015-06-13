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
            var venues = venueRepository.GetVenues();
            return ConvertToContract(venues);
        }

        private IEnumerable<object> ConvertToContract(IEnumerable<object> venues)
        {
            throw new NotImplementedException();
        }

        private object ConvertToContract(object venue)
        {
            throw new NotImplementedException();
        }
    }
}