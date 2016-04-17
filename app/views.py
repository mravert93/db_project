from django.http import HttpResponse
from django.template import RequestContext
from django.template import loader
from models import Maps, Teams, Players, Weapons

def index(request):
  context = {}
  template = loader.get_template('index.html')
  data = RequestContext(request, context)
  return HttpResponse(template.render(data))

def maps(request):
  all_entries = list(Maps.objects.all())
  context = {}
  context['maps'] = all_entries
  template = loader.get_template('maps.html')
  data = RequestContext(request, context)
  return HttpResponse(template.render(data))

def teams(request):
  teams = list(Teams.objects.all())
  sorted_teams = sorted(teams, key=lambda team: team.rank)
  context = {}
  context['teams'] = sorted_teams
  template = loader.get_template('teams.html')
  data = RequestContext(request, context)
  return HttpResponse(template.render(data))

def team_page(request):
  team_name = request.GET.get('team_name', '')
  players = list(Players.objects.filter(team_name=team_name))
  context = {}
  context['team_name'] = team_name
  context['players'] = players
  template = loader.get_template('team_page.html')
  data = RequestContext(request, context)
  return HttpResponse(template.render(data))

def weapons(request):
  all_entries = list(Weapons.objects.all())
  context = {}
  context['weapons'] = all_entries
  template = loader.get_template('weapons.html')
  data = RequestContext(request, context)
  return HttpResponse(template.render(data))

def players(request):
  players = list(Players.objects.all())
  sorted_players = sorted(players, key=lambda player: player.first_name)
  context = {}
  context['players'] = sorted_players
  template = loader.get_template('players.html')
  data = RequestContext(request, context)
  return HttpResponse(template.render(data))
