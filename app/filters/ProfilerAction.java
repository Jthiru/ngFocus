package filters;

import play.Logger;
import play.libs.F;
import play.mvc.Action;
import play.mvc.Http;
import play.mvc.Result;


/**
 * Action Composition
 * https://www.playframework.com/documentation/2.3.7/JavaActionsComposition
 *
 * Usage: add @With(ProfilerAction.class) before the Controller or Action definition
 */

public class ProfilerAction extends Action.Simple {
    private long currentTime;

    private void before(Http.Context ctx) {
        // Do the before things here
        currentTime = System.currentTimeMillis();
    }

    private void after(Http.Context ctx) {
        // Do the after things here
        Logger.info( ctx + " Time: " + (System.currentTimeMillis() - currentTime) + " ms" );
    }

    @Override
    public F.Promise<Result> call(Http.Context ctx) throws Throwable {
        try {
            before(ctx);
            F.Promise<Result> result = delegate.call(ctx); // This part calls your real action method
            after(ctx);
            return result;
        } catch (RuntimeException e) {
            throw e;
        } catch (Throwable t) {
            throw new RuntimeException(t);
        }
    }
}
