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
    url(r'^players', 'app.views.players'),
    url(r'^player', 'app.views.player'),
    url(r'^weapons', 'app.views.weapons'),
    url(r'^add_player', 'app.views.add_player'),
    url(r'^edit_player', 'app.views.edit_player'),
    url(r'^home', 'app.views.index'),
    url(r'^delete_player', 'app.views.delete_player'),
    url(r'^add_team', 'app.views.add_team'),
    url(r'^edit_team', 'app.views.edit_team'),
    url(r'^delete_team', 'app.views.delete_team'),
    url(r'^add_map', 'app.views.add_map'),
    url(r'^edit_map', 'app.views.edit_map'),
    url(r'^delete_map', 'app.views.delete_map'),
    url(r'^add_weapon', 'app.views.add_weapon'),
    url(r'^edit_weapon', 'app.views.edit_weapon'),
    url(r'^delete_weapon', 'app.views.delete_weapon')

)
