package services;

import common.TsModel;
import common.TsService;
import model.Task;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by siyengar on 2/13/15.
 */
public class TaskService extends TsService {
    public TaskService(){
        this.modelObj = new Task();
    }
}
