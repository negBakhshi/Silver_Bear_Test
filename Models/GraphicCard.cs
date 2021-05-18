using System;
using System.Collections.Generic;

#nullable disable

namespace FirstCoreAngularTry.Models
{
    public partial class GraphicCard
    {
        public GraphicCard()
        {
            Laptops = new HashSet<Laptop>();
        }

        public int Id { get; set; }
        public int ModelId { get; set; }
        public string Series { get; set; }
        public bool Archived { get; set; }

        public virtual GraphicCardModel Model { get; set; }
        public virtual ICollection<Laptop> Laptops { get; set; }
    }
}
