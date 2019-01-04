using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace BMI.Models
{
    public class Context:DbContext
    {
        public Context() : base("MyCon")
        { }
        public DbSet<Credentials> creadentials { get; set; }
        public float Result { get; internal set; }
    }
}