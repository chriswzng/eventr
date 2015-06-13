using EventrAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EventrAPI.Repositories
{
    public class BaseRepository
    {
        protected ModelContainer DataContext;

        public BaseRepository()
        {
            DataContext = new ModelContainer();
        }
    }
}