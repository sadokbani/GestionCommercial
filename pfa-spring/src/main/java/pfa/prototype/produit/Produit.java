/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pfa.prototype.produit;

import org.springframework.web.multipart.MultipartFile;
import pfa.prototype.fournisseur.Fournisseur;


import java.io.Serializable;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

/**
 *
 * @author SADOK
 */
@Entity
@Table(name = "produit")
@NamedQueries({
    @NamedQuery(name = "Produit.findAll", query = "SELECT p FROM Produit p")})
public class Produit implements Serializable {


    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Basic(optional = false)

    @Column(name = "prodId")
    private Integer prodId;

    @Column(name = "nom")
    private String nom;

    @Column(name = "categorie")
    private String categorie;

    @Column(name = "description")
    private String description;

    @Column(name = "prix")
    private Float prix;
    @Column(name = "quantiteStock")
    private Integer quantiteStock;
    @Column(name = "image")
    private String image;
    @JoinColumn(name = "fourId", referencedColumnName = "fourId")
    @ManyToOne
    @NotNull
    private Fournisseur fourId;



    public Produit() {
    }


    public Produit(String nom, String categorie, String description, Float prix, Integer quantiteStock, String image, @NotNull Fournisseur fourId) {
        this.nom = nom;
        this.categorie = categorie;
        this.description = description;
        this.prix = prix;
        this.quantiteStock = quantiteStock;
        this.image = image;
        this.fourId = fourId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Integer getProdId() {
        return prodId;
    }

    public void setProdId(Integer prodId) {
        this.prodId = prodId;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getCategorie() {
        return categorie;
    }

    public void setCategorie(String categorie) {
        this.categorie = categorie;
    }

    public Float getPrix() {
        return prix;
    }

    public void setPrix(Float prix) {
        this.prix = prix;
    }

    public Integer getQuantiteStock() {
        return quantiteStock;
    }

    public void setQuantiteStock(Integer quantiteStock) {
        this.quantiteStock = quantiteStock;
    }



    public Fournisseur getFourId() {
        return fourId;
    }

    public void setFourId(Fournisseur fourId) {
        this.fourId = fourId;
    }


    @Override
    public int hashCode() {
        int hash = 0;
        hash += (prodId != null ? prodId.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Produit)) {
            return false;
        }
        Produit other = (Produit) object;
        if ((this.prodId == null && other.prodId != null) || (this.prodId != null && !this.prodId.equals(other.prodId))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "finall.Produit[ prodId=" + prodId + " ]";
    }
    
}
