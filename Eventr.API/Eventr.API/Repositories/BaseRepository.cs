using Eventr.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Eventr.API.Repositories
{
    public abstract class BaseRepository
    {
        protected EventrAPIEntities1 DataContext;

        public BaseRepository()
        {
            DataContext = new EventrAPIEntities1();
        }

        public bool Commit()
        {
            return DataContext.SaveChanges() != 0;
        }
    }
}