import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController, LoadingController } from 'ionic-angular';

import { UserProvider, CreditProvider, EventLoggerProvider } from '../../providers/providers';
import { CreditDetail } from '../../models/credit/credit-detail';
import { presentToast, presentLoading } from '../pages';
import { TRANSACTION_TYPE, TRANSACTION_STATUS, RESPONSE_ERROR } from '../../constants/constants';

@IonicPage()
@Component({
	selector: 'page-credit-add',
	templateUrl: 'credit-add.html'
})
export class CreditAddPage {
	creditDetail: CreditDetail;

	private creditAddSuccess: string;
	private creditAddError: string;
	private creditAddError2: string;
	private creditAddError3: string;

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public viewCtrl: ViewController,
		public toastCtrl: ToastController,
		public translate: TranslateService,
		public userProvider: UserProvider,
		public creditProvider: CreditProvider,
		public logger: EventLoggerProvider,
		public loadingCtrl: LoadingController
	) {
		this.translate.get(['CREDIT_ADD_SUCCESS', 'CREDIT_ADD_ERROR', 'CREDIT_ADD_ERROR2', 'CREDIT_ADD_ERROR3']).subscribe(values => {
			this.creditAddSuccess = values['CREDIT_ADD_SUCCESS'];
			this.creditAddError = values['CREDIT_ADD_ERROR'];
			this.creditAddError2 = values['CREDIT_ADD_ERROR2'];
			this.creditAddError3 = values['CREDIT_ADD_ERROR3'];
		});

		this.creditDetail = new CreditDetail();
	}

	saveCreditTransaction() {
		this.creditDetail.userId = this.userProvider.user.userId;
		this.creditDetail.createdBy = this.userProvider.user.userId;
		this.creditDetail.comments = 'Créditos comprados';
		this.creditDetail.transactionTypeId = TRANSACTION_TYPE.ADD_CREDIT;
		this.creditDetail.status = TRANSACTION_STATUS.PENDING;

		let loading = presentLoading(this.loadingCtrl);
		this.creditProvider.addCredit(this.creditDetail).subscribe(
			(res: any) => {
				loading.dismiss();
				presentToast(this.toastCtrl, this.creditAddSuccess);
				this.creditDetail = res.body;
				this.viewCtrl.dismiss(true);

				let params = {
					item_name: this.creditDetail.comments,
					value: this.creditDetail.creditAmount
				};
				this.logger.logEvent(this.navCtrl.getActive().name, 'spend_virtual_currency', params);
			},
			err => {
				loading.dismiss();
				switch (err.error) {
					case RESPONSE_ERROR.CREDIT_ADD_ERROR:
						presentToast(this.toastCtrl, this.creditAddError);
						break;
					case RESPONSE_ERROR.CREDIT_ADD_ERROR2:
						presentToast(this.toastCtrl, this.creditAddError2);
						break;
					case RESPONSE_ERROR.CREDIT_ADD_ERROR3:
						presentToast(this.toastCtrl, this.creditAddError3);
						break;
					default:
						presentToast(this.toastCtrl, err.message);
						break;
				}
			}
		);
	}

	done() {
		this.saveCreditTransaction();
	}
}
