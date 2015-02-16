package controllers

import play.Logger
import play.api.mvc._

object Application extends Controller {

  def index = Action {
    Ok(views.html.index("Reflect..."))
  }

}