using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using FirstCoreAngularTry.Models;

#nullable disable

namespace FirstCoreAngularTry.Data
{
    public partial class SilverBearDBContext : DbContext
    {
        public SilverBearDBContext()
        {
        }

        public SilverBearDBContext(DbContextOptions<SilverBearDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Brand> Brands { get; set; }
        public virtual DbSet<Cpu> Cpus { get; set; }
        public virtual DbSet<GraphicCard> GraphicCards { get; set; }
        public virtual DbSet<GraphicCardModel> GraphicCardModels { get; set; }
        public virtual DbSet<Memory> Memories { get; set; }
        public virtual DbSet<Port> Ports { get; set; }
        public virtual DbSet<Storage> Storages { get; set; }
        public virtual DbSet<Unit> Units { get; set; }
        public virtual DbSet<Laptop> Laptops { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");


            // should add .HasIndex(e => e.Email).IsUnique(); for indexing

            modelBuilder.Entity<Brand>(entity =>
            {
                entity.ToTable("Brand");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Name).IsRequired().HasMaxLength(100);
            });

            modelBuilder.Entity<Cpu>(entity =>
            {
                entity.ToTable("CPU");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.BrandId).HasColumnName("BrandID");

                entity.Property(e => e.Series)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.HasOne(d => d.Brand)
                    .WithMany(p => p.Cpus)
                    .HasForeignKey(d => d.BrandId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_CPU_Brand");
            });

            modelBuilder.Entity<GraphicCard>(entity =>
            {
                entity.ToTable("GraphicCard");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.ModelId).HasColumnName("ModelID");

                entity.Property(e => e.Series)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.HasOne(d => d.Model)
                    .WithMany(p => p.GraphicCards)
                    .HasForeignKey(d => d.ModelId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_GraphicCard_GraphicCardModel");
            });

            modelBuilder.Entity<GraphicCardModel>(entity =>
            {
                entity.ToTable("GraphicCardModel");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.BrandId).HasColumnName("BrandID");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.HasOne(d => d.Brand)
                    .WithMany(p => p.GraphicCardModels)
                    .HasForeignKey(d => d.BrandId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_GraphicCardModels_Brands");
            });

            modelBuilder.Entity<Memory>(entity =>
            {
                entity.ToTable("Memory");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.UnitId).HasColumnName("UnitID");

                entity.Property(e => e.Value).HasColumnType("numeric(18, 0)");

                entity.HasOne(d => d.Unit)
                    .WithMany(p => p.Memories)
                    .HasForeignKey(d => d.UnitId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_Memory_Units");
            });

            modelBuilder.Entity<Port>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.UnitId).HasColumnName("UnitID");

                entity.HasOne(d => d.Unit)
                    .WithMany(p => p.Ports)
                    .HasForeignKey(d => d.UnitId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_Ports_Units");
            });

            modelBuilder.Entity<Storage>(entity =>
            {
                entity.ToTable("Storage");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.MemoryId).HasColumnName("MemoryID");

                entity.Property(e => e.Type)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.HasOne(d => d.Memory)
                    .WithMany(p => p.Storages)
                    .HasForeignKey(d => d.MemoryId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_Storage_Memory");
            });

            modelBuilder.Entity<Unit>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Type)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Value)
                    .IsRequired()
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<Laptop>(entity =>
            {
                entity.ToTable("Laptop");

                entity.Property(e => e.Id)
                    .HasColumnName("ID");

                entity.Property(e => e.Weight).HasColumnType("decimal(18, 2)");

                entity.HasOne(d => d.Cpu)
                    .WithMany(p => p.Laptops)
                    .HasForeignKey(d => d.CpuId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_Laptop_CPU");

                entity.HasOne(d => d.Port)
                    .WithMany(p => p.Laptops)
                    .HasForeignKey(d => d.PortId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_Laptop_PORT");

                entity.HasOne(d => d.GraphicCard)
                    .WithMany(p => p.Laptops)
                    .HasForeignKey(d => d.GraphicCardId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_Laptop_GraphicCard");

                entity.HasOne(d => d.Memory)
                    .WithMany(p => p.Laptops)
                    .HasForeignKey(d => d.MemoryId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_Laptop_Memory");

                entity.HasOne(d => d.PowerUnit)
                    .WithMany(p => p.LaptopPowerUnits)
                    .HasForeignKey(d => d.PowerUnitId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_Laptop_Units");

                entity.HasOne(d => d.Storage)
                    .WithMany(p => p.Laptops)
                    .HasForeignKey(d => d.StorageId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_Laptop_Storage");

                entity.HasOne(d => d.WeightUnit)
                    .WithMany(p => p.LaptopWeightUnits)
                    .HasForeignKey(d => d.WeightUnitId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_Laptop_Units1");
            });


            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
