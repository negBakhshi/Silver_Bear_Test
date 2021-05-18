using System;
using System.Collections.Generic;

#nullable disable

namespace FirstCoreAngularTry.Models
{
    public partial class Unit
    {
        public Unit()
        {
            LaptopPowerUnits = new HashSet<Laptop>();
            LaptopWeightUnits = new HashSet<Laptop>();
            Memories = new HashSet<Memory>();
            Ports = new HashSet<Port>();
        }

        public int Id { get; set; }
        public string Type { get; set; }
        public string Value { get; set; }

        public virtual ICollection<Laptop> LaptopPowerUnits { get; set; }
        public virtual ICollection<Laptop> LaptopWeightUnits { get; set; }
        public virtual ICollection<Memory> Memories { get; set; }
        public virtual ICollection<Port> Ports { get; set; }
    }
}
