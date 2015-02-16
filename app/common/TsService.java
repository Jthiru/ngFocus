package common;

import java.util.ArrayList;
import java.util.List;

public abstract class TsService {
	protected TsModel modelObj;

	public TsModel get(Object object){
		TsModel retval = this.modelObj;
		// throw new NotImplementedException();
		return retval;
	}
	public List<TsModel> getAll(){
		// TODO: Validate if modelObj is set by the descendant
		List<TsModel> retval = new ArrayList<TsModel>();
		return retval;
	}
   	public int create(Object object){
		int retval = -1;
		// throw new NotImplementedException();
		return retval;
	}
	public void update(Object object){
		// throw new NotImplementedException();
	}
	public int delete(Object object){
		int retval = -1;
		// throw new NotImplementedException();
		return retval;
	}
}
