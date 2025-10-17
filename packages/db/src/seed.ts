import { PrismaClient, GameType, MembershipRole, PlanTier } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const organization = await prisma.organization.upsert({
    where: { slug: 'demo-org' },
    update: {},
    create: {
      name: 'Demo Esports Org',
      slug: 'demo-org'
    }
  });

  const user = await prisma.user.upsert({
    where: { email: 'demo@nexus.gg' },
    update: {},
    create: {
      email: 'demo@nexus.gg',
      name: 'Demo Analyst'
    }
  });

  await prisma.membership.upsert({
    where: {
      userId_organizationId: {
        userId: user.id,
        organizationId: organization.id
      }
    },
    update: {},
    create: {
      role: MembershipRole.OWNER,
      userId: user.id,
      organizationId: organization.id
    }
  });

  await Promise.all([
    prisma.game.upsert({
      where: { name: 'Valorant' },
      update: {},
      create: {
        name: 'Valorant',
        type: GameType.ESPORTS
      }
    }),
    prisma.game.upsert({
      where: { name: 'NBA' },
      update: {},
      create: {
        name: 'NBA',
        type: GameType.SPORTS
      }
    })
  ]);

  await prisma.plan.upsert({
    where: { name: 'Free' },
    update: {},
    create: {
      name: 'Free',
      tier: PlanTier.FREE,
      priceMonthly: 0,
      priceYearly: 0,
      features: ['Up to 5 dashboards', '25 NL queries / day']
    }
  });

  const dashboard = await prisma.dashboard.upsert({
    where: { id: 'demo-dashboard' },
    update: {},
    create: {
      id: 'demo-dashboard',
      name: 'Esports Overview',
      organizationId: organization.id,
      description: 'Starter dashboard seeded with demo widgets.'
    }
  });

  await prisma.widget.upsert({
    where: { id: 'demo-widget' },
    update: {},
    create: {
      id: 'demo-widget',
      dashboardId: dashboard.id,
      title: 'Valorant Win Rate (90d)',
      querySpec: {
        measures: ['win_rate'],
        dimensions: ['map'],
        filters: [{ dimension: 'game', operator: '=', value: 'Valorant' }],
        timegrain: 'month',
        viz: 'bar'
      },
      visualization: {
        type: 'bar',
        color: '#7F5AF0'
      }
    }
  });

  console.log('Seed completed');
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
