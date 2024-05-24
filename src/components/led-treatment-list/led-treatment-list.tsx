import { Component, Event, EventEmitter, Host, Prop, State, h } from '@stencil/core';
import { LedTreatmentListApiFactory, Treatment } from '../../api/led-projekt';

@Component({
  tag: 'led-treatment-list',
  styleUrl: 'led-treatment-list.css',
  shadow: true,
})
export class LedTreatmentList {
  @Event({ eventName: "entry-clicked"}) entryClicked: EventEmitter<string>;
  @Prop() apiBase: string;
  @Prop() ambulanceId: string;
  @State() errorMessage: string;

  treatments: Treatment[];

  private async getTreatmentsAsync(): Promise<Treatment[]>{
    try {
      const response = await
        LedTreatmentListApiFactory(undefined, this.apiBase).
          getTreatments()
      if (response.status < 299) {
        return response.data;
      } else {
        this.errorMessage = `Cannot retrieve list of treatments: ${response.statusText}`
      }
    } catch (err: any) {
      this.errorMessage = `Cannot retrieve list of treatments: ${err.message || "unknown"}`
    }
    return [];
  }

  async componentWillLoad() {
    this.treatments = await this.getTreatmentsAsync();
  }

  render() {
    return (
      <Host>
        <h2>Zoznam liečebných plánov</h2>
        {this.errorMessage
        ? <div class="error">{this.errorMessage}</div>
        :
          <md-list>
            {this.treatments.map(treatment =>
              <md-list-item onClick={ () => this.entryClicked.emit(treatment.id)}>
              <div slot="headline">Liečebný plán pacienta:</div>
              <div slot="headline">{treatment.name}</div>
              <div slot="supporting-text">{"Začiatok liečby: " + this.isoDateToLocale(treatment.startDate)}</div>
              <div slot="supporting-text">{"Koniec liečby: " + this.isoDateToLocale(treatment.endDate)}</div>
              <md-icon slot="start">person</md-icon>
            </md-list-item>
            )}
          </md-list>
        }
        <md-filled-icon-button class="add-button"
          onclick={() => this.entryClicked.emit("@new")}>
          <md-icon>add</md-icon>
        </md-filled-icon-button>
      </Host>
    );
  }

  private isoDateToLocale(iso:string) {
    if(!iso) return '';
    return new Date(Date.parse(iso)).toLocaleDateString()
  }

}
