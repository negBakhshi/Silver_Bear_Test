using System;
using System.Collections.Generic;

#nullable disable

namespace FirstCoreAngularTry.Models
{
    public partial class Memory
    {
        public Memory()
        {
            Laptops = new HashSet<Laptop>();
            Storages = new HashSet<Storage>();
        }

        public int Id { get; set; }
        public int UnitId { get; set; }
        public decimal Value { get; set; }
        public bool Archived { get; set; }

        public virtual Unit Unit { get; set; }
        public virtual ICollection<Laptop> Laptops { get; set; }
        public virtual ICollection<Storage> Storages { get; set; }
    }
}
