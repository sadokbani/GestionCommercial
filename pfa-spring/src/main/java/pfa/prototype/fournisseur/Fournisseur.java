/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pfa.prototype.fournisseur;

import pfa.prototype.produit.Produit;

import java.io.Serializable;
import java.util.List;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;


@Entity
@Table(name = "fournisseur")
@NamedQueries({
    @NamedQuery(name = "Fournisseur.findAll", query = "SELECT f FROM Fournisseur f")})
public class Fournisseur implements Serializable {


    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Basic(optional = false)

    @Column(name = "fourId")
    private Integer fourId;

    @Column(name = "nom")
    private String nom;

    @Column(name = "mail")
    private String mail;

    @Column(name = "telephone")
    private String telephone;

    @Column(name = "adresse")
    private String adresse;


    public Fournisseur() {
    }

    public Fournisseur(String nom, String mail, String telephone, String adresse) {
        this.nom = nom;
        this.mail = mail;
        this.telephone = telephone;
        this.adresse = adresse;
    }

    public Integer getFourId() {
        return fourId;
    }

    public void setFourId(Integer fourId) {
        this.fourId = fourId;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }



    @Override
    public int hashCode() {
        int hash = 0;
        hash += (fourId != null ? fourId.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Fournisseur)) {
            return false;
        }
        Fournisseur other = (Fournisseur) object;
        if ((this.fourId == null && other.fourId != null) || (this.fourId != null && !this.fourId.equals(other.fourId))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "finall.Fournisseur[ fourId=" + fourId + " ]";
    }
    
}
