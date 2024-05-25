import { Component, Host, Prop, State, h, EventEmitter, Event } from '@stencil/core';
import { LedTreatmentListApiFactory, Treatment } from '../../api/led-projekt';

@Component({
  tag: 'led-treatment-editor',
  styleUrl: 'led-treatment-editor.css',
  shadow: true,
})
export class LedTreatmentEditor {

  @Prop() treatmentId: string;
  @Prop() apiBase: string;

  @Event({eventName: "editor-closed"}) editorClosed: EventEmitter<string>;

  @State() treatment: Treatment;
  @State() errorMessage: string;
  @State() isValid: boolean;

  private formElement: HTMLFormElement;

  private async getTreatmentDetail(): Promise<Treatment> {
    if(this.treatmentId === "@new") {
      this.isValid = false;
      this.treatment = {
        id: "@new",
        name: "",
        patientId: "",
        startDate: "",
        endDate: ""
      };
      return this.treatment;
    }
    if ( !this.treatmentId ) {
       this.isValid = false;
       return undefined
    }
    try {
       const response = await LedTreatmentListApiFactory(undefined, this.apiBase).getTreatmentDetail(this.treatmentId)

       if (response.status < 299) {
          this.treatment = response.data;
          this.isValid = true;
       } else {
          this.errorMessage = `Cannot retrieve list of waiting patients: ${response.statusText}`
       }
    } catch (err: any) {
       this.errorMessage = `Cannot retrieve list of waiting patients: ${err.message || "unknown"}`
    }
    return undefined;
 }

 async componentWillLoad() {
  this.getTreatmentDetail();
}
  
 render() {
  if(this.errorMessage) {
    return (
    <Host>
       <div class="error">{this.errorMessage}</div>
    </Host>
    )
 }
  return (
    <Host>
      <form ref={el => this.formElement = el}>
        <md-filled-text-field label="Meno a Priezvisko" 
          required value={this.treatment?.name}
          oninput={ (ev: InputEvent) => {
              if(this.treatment) {this.treatment.name = this.handleInputEvent(ev)}
          }}>
          <md-icon slot="leading-icon">person</md-icon>
        </md-filled-text-field>

        <md-filled-text-field label="Registračné číslo pacienta" 
          required value={this.treatment?.patientId}
          oninput={ (ev: InputEvent) => {
              if(this.treatment) {this.treatment.patientId = this.handleInputEvent(ev)}
          }}>
          <md-icon slot="leading-icon">fingerprint</md-icon>
        </md-filled-text-field>

        <md-filled-text-field label="Začiatok liečby" disabled={ !this.treatment }
          value={this.treatment?.startDate}>
          <md-icon slot="leading-icon">watch_later</md-icon>
        </md-filled-text-field>

        <md-filled-text-field label="Koniec liečby" disabled={ !this.treatment }
          value={this.treatment?.endDate}>
          <md-icon slot="leading-icon">watch_later</md-icon>
        </md-filled-text-field>
      </form>

      <md-divider></md-divider>
      <div class="actions">
        <md-filled-tonal-button 
          id="delete" 
          disabled={!this.treatment || this.treatment?.id === "@new" }
          onClick={() => this.deleteTreatment()}>
          <md-icon slot="icon">delete</md-icon>
          Zmazať
        </md-filled-tonal-button>
        <span class="stretch-fill"></span>
        <md-outlined-button 
          id="cancel"
          onClick={() => this.editorClosed.emit("cancel")}>
          Zrušiť
        </md-outlined-button>
        <md-filled-button 
          id="confirm" 
          disabled={ !this.isValid }
          onClick={() => this.updateTreatment()}>
          <md-icon slot="icon">save</md-icon>
          Uložiť
        </md-filled-button>
      </div>
    </Host>
  );
}

private handleInputEvent( ev: InputEvent): string {
  const target = ev.target as HTMLInputElement;
  // check validity of elements
  this.isValid = true;
  for (let i = 0; i < this.formElement.children.length; i++) {
     const element = this.formElement.children[i]
     if ("reportValidity" in element) {
     const valid = (element as HTMLInputElement).reportValidity();
     this.isValid &&= valid;
     }
  }
  return target.value
}

private async updateTreatment() {
  try {
      // store or update
      const api = LedTreatmentListApiFactory(undefined, this.apiBase);
      const response = this.treatmentId === "@new"
         ? await api.createTreatment(this.treatment)
         : await api.updateTreatment(this.treatmentId, this.treatment);
      if (response.status < 299) {
        this.editorClosed.emit("store")
      } else {
        this.errorMessage = `Cannot store entry: ${response.statusText}`
      }
    } catch (err: any) {
      this.errorMessage = `Cannot store entry: ${err.message || "unknown"}`
    }
}

private async deleteTreatment() {
  try {
     const response = await LedTreatmentListApiFactory(undefined, this.apiBase)
        .deleteTreatment(this.treatmentId)
     if (response.status < 299) {
     this.editorClosed.emit("delete")
     } else {
     this.errorMessage = `Cannot delete entry: ${response.statusText}`
     }
  } catch (err: any) {
     this.errorMessage = `Cannot delete entry: ${err.message || "unknown"}`
  }
}

}
