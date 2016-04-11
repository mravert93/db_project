from django.conf.urls import patterns, include, url

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'csgo_project.views.home', name='home'),
    # url(r'^csgo_project/', include('csgo_project.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', 'app.views.index'),
    url(r'^maps', 'app.views.maps'),
    url(r'^teams', 'app.views.teams'),
    url(r'^team_page', 'app.views.team_page'),
    url(r'^player', 'app.views.player'),
    url(r'^weapons', 'app.views.weapons'),
    url(r'^add_player', 'app.views.add_player'),
)
