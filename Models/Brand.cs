using System;
using System.Collections.Generic;

#nullable disable

namespace FirstCoreAngularTry.Models
{
    public partial class Brand
    {
        public Brand()
        {
            Cpus = new HashSet<Cpu>();
            GraphicCardModels = new HashSet<GraphicCardModel>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public bool Archived { get; set; }

        public virtual ICollection<Cpu> Cpus { get; set; }
        public virtual ICollection<GraphicCardModel> GraphicCardModels { get; set; }
    }
}
