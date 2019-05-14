/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pfa.prototype.lignedecommande;

import pfa.prototype.commande.Commande;
import pfa.prototype.produit.Produit;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;


@Entity
@Table(name = "lignedecommande")
@NamedQueries({
    @NamedQuery(name = "Lignedecommande.findAll", query = "SELECT l FROM Lignedecommande l")})
public class Lignedecommande implements Serializable {


    @EmbeddedId
    protected LignedecommandePK lignedecommandePK;
    @Column(name = "quantite")
    private Integer quantite;
    @JoinColumn(name = "prodId", referencedColumnName = "prodId", insertable = false, updatable = false)
    @ManyToOne(optional = false)
    private Produit produit;
    @JoinColumn(name = "commandeId", referencedColumnName = "commandeId", insertable = false, updatable = false)
    @ManyToOne(optional = false)
    private Commande commande;

    public Lignedecommande() {
    }

    public Lignedecommande(LignedecommandePK lignedecommandePK) {
        this.lignedecommandePK = lignedecommandePK;
    }

    public Lignedecommande(int prodId, int commandeId) {
        this.lignedecommandePK = new LignedecommandePK(prodId, commandeId);
    }

    public LignedecommandePK getLignedecommandePK() {
        return lignedecommandePK;
    }

    public void setLignedecommandePK(LignedecommandePK lignedecommandePK) {
        this.lignedecommandePK = lignedecommandePK;
    }

    public Integer getQuantite() {
        return quantite;
    }

    public void setQuantite(Integer quantite) {
        this.quantite = quantite;
    }

    public Produit getProduit() {
        return produit;
    }

    public void setProduit(Produit produit) {
        this.produit = produit;
    }

    public Commande getCommande() {
        return commande;
    }

    public void setCommande(Commande commande) {
        this.commande = commande;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (lignedecommandePK != null ? lignedecommandePK.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Lignedecommande)) {
            return false;
        }
        Lignedecommande other = (Lignedecommande) object;
        if ((this.lignedecommandePK == null && other.lignedecommandePK != null) || (this.lignedecommandePK != null && !this.lignedecommandePK.equals(other.lignedecommandePK))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "finall.Lignedecommande[ lignedecommandePK=" + lignedecommandePK + " ]";
    }

}
