using System;
using System.Collections.Generic;

#nullable disable

namespace FirstCoreAngularTry.Models
{
    public partial class Cpu
    {
        public Cpu()
        {
            Laptops = new HashSet<Laptop>();
        }

        public int Id { get; set; }
        public int BrandId { get; set; }
        public string Series { get; set; }
        public bool Archived { get; set; }

        public virtual Brand Brand { get; set; }
        public virtual ICollection<Laptop> Laptops { get; set; }
    }
}
