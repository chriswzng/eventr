using EventrAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EventrAPI.Repositories
{
    public class BaseRepository
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