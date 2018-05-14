import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { UserProvider, PollaProvider } from '../../providers/providers';
import { PollaBet } from '../../models/polla/polla-bet';
import { presentToast } from '../pages';

@IonicPage()
@Component({
	selector: 'page-game-bet-list',
	templateUrl: 'game-bet-list.html'
})
export class GameBetListPage {
	pollaBetList: PollaBet[];

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public toastCtrl: ToastController,
		public userProvider: UserProvider,
		public pollaProvider: PollaProvider
	) {
		this.loadGameBets();
	}

	loadGameBets() {
		let pollaId: number = this.navParams.get('pollaId');
		let userId: number = this.userProvider.user.userId;

		this.pollaProvider.getGameBetsByPollaIdAndUserId(pollaId, userId).subscribe(
			(res: any) => {
				this.pollaBetList = res.body;
			},
			err => {
				presentToast(this.toastCtrl, err.message);
			}
		);
	}

	filter(ev) {
		// set val to the value of the ev target
		let name: string = ev.target.value;

		// if the value is an empty string don't filter the items
		if (name && name.trim() != '') {
			this.pollaBetList = this.pollaBetList.filter(pollaBet => {
				return pollaBet.pollaMatch.match.localTeam.teamName.toLowerCase().indexOf(name.toLowerCase()) > -1;
			});
		} else {
			// Reset items back to all of the items
			this.loadGameBets();
		}
	}

	openGameBetSavePage(pollaBet: PollaBet) {
		this.navCtrl.push('GameBetSavePage', { pollaBet: pollaBet });
	}
}