import { observable } from 'mobx';
class Store {
	@observable visible = false;
	@observable bank_list = [];
	@observable total = 0;
	@observable tableLoading = false;
	@observable modalLoading = false;
	@observable logo;
}
export default new Store();