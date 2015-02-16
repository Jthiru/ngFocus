package util

import play.api.mvc.Controller

/**
 * Created by siyengar on 2/7/15.
 */

object cdn {
  def ui_common(file: String): String = {
    play.api.Play.current.configuration.getString("teachscape.ui_common.baseurl") match{
      case Some(baseurl) => baseurl + file
      case None => file
    }
  }
}
