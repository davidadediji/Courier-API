# weather app
import gi
import requests

gi.require_version("Gtk", "3.0")
from gi.repository import Gtk


class ShowWeatherApp(Gtk.Window):
    def __init__(self):
        super().__init__(title="Weather App")
        self.connect("destroy", Gtk.main_quit)

    def fetch_weather_details(self):
        requests.get();
    def run(self):
        self.show_all()
        Gtk.main()


if __name__ == "__main__":
    app = ShowWeatherApp()
    app.run()
