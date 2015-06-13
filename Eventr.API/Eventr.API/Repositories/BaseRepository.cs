using Eventr.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Eventr.API.Repositories
{
    public abstract class BaseRepository
    {
        protected EventrEntities DataContext;

        public BaseRepository()
        {
            DataContext = new EventrEntities();
        }

        protected bool Commit()
        {
            return DataContext.SaveChanges() != 0;
        }
    }
}