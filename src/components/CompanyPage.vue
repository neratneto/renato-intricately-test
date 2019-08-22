<template>
<div class="flex-column company-page">
  <div class="flex-row">
    <card class="logo-card">
      <responsive-image class="icon" :path="`company-page/squares`" />
    </card>

    <div class="flex-column">
      <p class="name">{{ company.name }}</p>
      <div class="flex-row location">
        <responsive-image class="icon" :path="`company-page/location`" />
        <p class="text">{{ company.location }}</p>
      </div>
    </div>
  </div>

  <p class="statement">{{ company.statement }}</p>

  <div class="flex-row">
    <card class="activities" title="Activities">
      <div class="flex-row activity" v-for="(activity, index) in company.activities" :key="index">
        <span class="time">{{ activity.time }} days ago</span>
        <div class="icon-container">
          <responsive-image class="icon" :path="`company-page/${activity.icon}`" />
        </div>
        <span class="text"><span class="blue-font">{{ activity.company }}</span> replaced <s class="grey-font">Microsoft</s> on <span class="blue-font">1 property</span>
        </span>
      </div>
    </card>

    <div class="flex-column">
      <card class="similar-companies" title="Similar companies">
        <div class="flex-row company" v-for="(company, index) in company.similarCompanies" :key="index">
          <div class="icon-container">
            <responsive-image class="icon" :path="`company-page/${company.icon}`" />
          </div>
          <span class="text blue-font">{{ company.company }}</span>
        </div>
      </card>

      <card class="spend-history" title="Company spend history">
        <div class="flex-row history" v-for="(history, index) in company.spendHistory" :key="index">
          <div class="icon-container">
            <responsive-image class="icon" :path="`company-page/${history.icon}`" />
          </div>
          <div class="flex-column text-container">
            <span class="text blue-font">{{ history.company }},</span>
            <span class="amount">{{ company.name }} spend on product ${{ history.amount.toLocaleString('en') }}</span>
          </div>
        </div>
      </card>
    </div>
  </div>
</div>
</template>

<script>
import Card from './Card.vue'
import ResponsiveImage from './ResponsiveImage.vue'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    Card,
    ResponsiveImage
  },
  data: () => ({
    company: {
      name: 'Microsoft',
      location: 'Redmond, WA USA',
      statement: 'At Microsoft, our mission is to empower every person and every organization on the planet to achieve more. Our mission is grounded in both the world in which we live and the future we strive to create.',
      activities: [{
        time: 8,
        company: 'Cloud Orchestration',
        icon: 'video-platform'
      }, {
        time: 10,
        company: 'Express Scripts',
        icon: 'content-delivery'
      }, {
        time: 12,
        company: 'Kaiser Permanente',
        icon: 'waf-d-dos-security'
      }, {
        time: 14,
        company: 'Molina Healthcare',
        icon: 'traffic-management'
      }, {
        time: 15,
        company: 'Express Scripts',
        icon: 'dns'
      }, {
        time: 16,
        company: 'Kaise Permanente',
        icon: 'performance-monitoring'
      }, {
        time: 17,
        company: 'Molina Heallthcare',
        icon: 'saas'
      }],
      similarCompanies: [{
        icon: 'logo',
        company: 'Amazon Web Services (AWS)'
      }, {
        icon: 'logo-copy',
        company: 'Oracle Corporation'
      }],
      spendHistory: [{
        icon: 'google-cloud',
        company: 'Google Cloud Platform',
        amount: 500000
      }, {
        icon: 'group-copy-2',
        company: 'CenturyLink CDN',
        amount: 300000
      }]
    }
  }),
}
</script>

<style lang="scss" >
.blue-font {
    color: #616D9D;
}
.grey-font {
    color: #9B9B9B;
}
.company-page {
    .logo-card {
        box-shadow: 0 2px 4px rgba(0,0,0,0.16);
        padding: 1.4vw;
        height: 100%;
        margin: 1vw;
        .logo {
            width: 3.2vw;
            height: 3.2vw;
        }
    }

    .name {
        font-size: 2.4em;
        margin: 2vh 0;
    }

    .location {
        margin-top: 1vh;
        .icon {
            width: auto;
            height: 2vh;
        }
        .text {
            margin: 0 1vw;
            font-size: 1em;
            color: #545454;
        }
    }
    .statement {
        font-size: 1.2em;
        line-height: 2em;
    }

    .activities {
        width: 60%;
        .activity {
            border-bottom: 1px solid #dddddd;
            .time {
                width: 24%;
                color: #9B9B9B;
                font-weight: 600;
                padding: 1vw;
                font-size: 0.8em;
            }
            .icon-container {
                width: 12%;
                padding: 1vw;
                .icon {
                    width: 1.8vw;
                    height: 1.8vw;
                }
            }
            .text {
                color: rgba(0, 0, 0, 0.8);
                padding: 1vw;
                font-size: 1em;
                width: 64%;
            }
        }
    }
    .activity:last-child {
        border-bottom: none;
    }

    .similar-companies {
        width: 100%;
        margin: 0 1vw 1vw;
        padding-bottom: 1vw;
        .icon-container {
            padding: 0.8vw 0.4vw 0.2vw 0.8vw;
            .icon {
                width: 4vw;
                height: 4vw;
            }
        }
        .text {
            font-size: 1.2em;
            padding: 4vh 0;
        }
    }

    .spend-history {
        width: 100%;
        margin: 0 1vw 1vw;
        .icon-container {
            box-shadow: 0 2px 4px rgba(0,0,0,0.32);
            padding: 0.2vw;
            border-radius: 8px;
            margin: 1vw;
            height: 100%;

            .icon {
                width: 2vw;
                height: auto;
            }
        }
        .text-container {
            margin: 1vw 0;
            .text {
                font-size: 1.2em;
            }
            .amount {
                color: rgba(0, 0, 0, 0.8);
            }
        }
    }
}
</style>
