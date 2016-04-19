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

def player(request):
  if request.method == 'POST':
    first = request.POST.get('first_name', '')
    last = request.POST.get('last_name', '')
    player_gamertag = request.POST.get('gamertag', '')
    team_name = request.POST.get('team_name', '')
    age = request.POST.get('age', '')
    country = request.POST.get('country_of_origin', '')
    kdr = request.POST.get('kdr', '')
    headshot = request.POST.get('headshot_percentage', '')
    fav_weapon = request.POST.get('favorite_weapon', '')
    team = Teams.objects.get(team_name=team_name)
    weapon = Weapons.objects.get(weapon_name=fav_weapon)
    new_p = Players(first_name=first,
                    last_name=last,
                    gamertag=player_gamertag,
                    team_name=team,
                    age=age,
                    country_of_origin=country,
                    kdr=kdr,
                    headshot_percentage=headshot,
                    favorite_weapon=weapon)
    new_p.save()
  else:
    player_gamertag = request.GET.get('gamertag', '')
  player = Players.objects.get(gamertag=player_gamertag)
  context = {}
  context['player'] = player
  template = loader.get_template('player.html')
  data = RequestContext(request, context)
  return HttpResponse(template.render(data))

def weapons(request):
  all_entries = list(Weapons.objects.all())
  context = {}
  context['weapons'] = all_entries
  template = loader.get_template('weapons.html')
  data = RequestContext(request, context)
  return HttpResponse(template.render(data))

def add_player(request):
  context = {}
  template = loader.get_template('add_player.html')
  data = RequestContext(request, context)
  return HttpResponse(template.render(data))

def players(request):
  players = list(Players.objects.all())
  sorted_players = sorted(players, key=lambda player: player.last_name)
  context = {}
  context['players'] = sorted_players
  template = loader.get_template('players.html')
  data = RequestContext(request, context)
  return HttpResponse(template.render(data))
