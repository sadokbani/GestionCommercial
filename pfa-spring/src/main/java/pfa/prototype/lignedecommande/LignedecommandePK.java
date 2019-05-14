/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pfa.prototype.lignedecommande;

import java.io.Serializable;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.validation.constraints.NotNull;

@Embeddable
public class LignedecommandePK implements Serializable {

    @Basic(optional = false)
    @NotNull
    @Column(name = "prodId")
    private int prodId;
    @Basic(optional = false)
    @NotNull
    @Column(name = "commandeId")
    private int commandeId;

    public LignedecommandePK() {
    }

    public LignedecommandePK(int prodId, int commandeId) {
        this.prodId = prodId;
        this.commandeId = commandeId;
    }

    public int getProdId() {
        return prodId;
    }

    public void setProdId(int prodId) {
        this.prodId = prodId;
    }

    public int getCommandeId() {
        return commandeId;
    }

    public void setCommandeId(int commandeId) {
        this.commandeId = commandeId;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (int) prodId;
        hash += (int) commandeId;
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof LignedecommandePK)) {
            return false;
        }
        LignedecommandePK other = (LignedecommandePK) object;
        if (this.prodId != other.prodId) {
            return false;
        }
        if (this.commandeId != other.commandeId) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "finall.LignedecommandePK[ prodId=" + prodId + ", commandeId=" + commandeId + " ]";
    }
    
}
