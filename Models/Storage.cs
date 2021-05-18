using System;
using System.Collections.Generic;

#nullable disable

namespace FirstCoreAngularTry.Models
{
    public partial class Storage
    {
        public Storage()
        {
            Laptops = new HashSet<Laptop>();
        }

        public int Id { get; set; }
        public int MemoryId { get; set; }
        public string Type { get; set; }
        public bool Archived { get; set; }

        public virtual Memory Memory { get; set; }
        public virtual ICollection<Laptop> Laptops { get; set; }
    }
}
