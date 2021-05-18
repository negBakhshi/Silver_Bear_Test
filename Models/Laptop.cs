using System;
using System.Collections.Generic;

#nullable disable

namespace FirstCoreAngularTry.Models
{
    public partial class Laptop
    {
        public int Id { get; set; }
        public int MemoryId { get; set; }
        public int StorageId { get; set; }
        public int GraphicCardId { get; set; }
        public int CpuId { get; set; }
        public int PortId { get; set; }
        public int PowerUnitId { get; set; }
        public int Power { get; set; }
        public decimal Weight { get; set; }
        public int WeightUnitId { get; set; }

        public virtual Cpu Cpu { get; set; }
        public virtual Port Port { get; set; }
        public virtual GraphicCard GraphicCard { get; set; }
        public virtual Memory Memory { get; set; }
        public virtual Unit PowerUnit { get; set; }
        public virtual Storage Storage { get; set; }
        public virtual Unit WeightUnit { get; set; }
    }
}
