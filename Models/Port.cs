using System;
using System.Collections.Generic;

#nullable disable

namespace FirstCoreAngularTry.Models
{
    public partial class Port
    {
        public int Id { get; set; }
        public int Quantity { get; set; }
        public int UnitId { get; set; }

        public virtual Unit Unit { get; set; }
        public virtual ICollection<Laptop> Laptops { get; set; }
    }
}
