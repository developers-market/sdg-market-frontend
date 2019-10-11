import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';

import { LoginComponent } from './login/login.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { AddRepositoryComponent } from './repositories/add-repository/add-repository.component';
import { EditRepositoryComponent } from './repositories/edit-repository/edit-repository.component';
import { AuctionsComponent } from './auctions/auctions.component';
import { ProjectAuctionComponent } from './auctions/project-auction/project-auction.component';
import { CallbackComponent } from './login/callback/callback.component';
import { UsersComponent } from './users/users.component';
import { UserShowComponent } from './user-show/user-show.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfilComponent } from './profil/profil.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { GraphComponent } from './graph/graph.component';

/**
 * Route constant
 */
const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'callback', component: CallbackComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'graph', component: GraphComponent },
  { path: 'repositories', component: RepositoriesComponent, canActivate: [AuthGuard] },
  { path: 'repositories/add', component: AddRepositoryComponent, canActivate: [AuthGuard] },
  { path: 'repositories/edit/:id', component: EditRepositoryComponent, canActivate: [AuthGuard] },
  { path: 'auctions', component: AuctionsComponent },
  { path: 'auctions/project/:id', component: ProjectAuctionComponent },
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard], data: { expectedRole: 'ROLE_ADMIN' } },
  { path: 'users/show/:username', component: UserShowComponent },
  { path: '**', redirectTo: 'auctions' }
];

/**
 * Routing module
 */
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthGuard
  ],
  exports: [RouterModule]
})
export class RoutingModule {
}
