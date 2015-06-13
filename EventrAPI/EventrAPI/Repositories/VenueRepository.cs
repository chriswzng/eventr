using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EventrAPI.Repositories
{
    public class VenueRepository : BaseRepository
    {
        public VenueRepository() : base()
        {
        }

        internal IEnumerable<object> GetVenues()
        {
            throw new NotImplementedException();
        }

        internal bool AddVenue()
        {
            return Commit();
        }

        internal bool UpdateVenue()
        {
            return Commit();
        }
    }
}