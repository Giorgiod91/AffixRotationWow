"use client";


export async function fetchAffixes() {
    const res = await fetch("https://raider.io/api/v1/mythic-plus/affixes?region=eu&locale=en");
    const data = await res.json();
    return data;
    }
    fetchAffixes();
    console.log(fetchAffixes());

    const data = [
        {
            'wowhead_url': 'https://wowhead.com/affix=10',
            'name': 'Fortified',
            'description': 'Non-boss enemies have 20% more health and inflict up to 30% increased damage.',
        },
        {
            'wowhead_url': 'https://wowhead.com/affix=9',
            'name': 'Tyrannical',
            'description': 'Boss enemies have 40% more health and inflict up to 15% increased damage.',
        },
        {
            'wowhead_url': 'https://wowhead.com/affix=7',
            'name': 'Bolstering',
            'description': 'When any non-boss enemy dies, its death cry empowers nearby allies, increasing their maximum health and damage by 20%.',
        },
        {
            'wowhead_url': 'https://wowhead.com/affix=5',
            'name': 'Raging',
            'description': 'Non-boss enemies enrage at 30% health remaining, dealing 100% increased damage until defeated.',
        },
        {
            'wowhead_url': 'https://wowhead.com/affix=2',
            'name': 'Sanguine',
            'description': 'When slain, non-boss enemies leave behind a lingering pool of ichor that heals their allies and damages players.',
        },
        {
            'wowhead_url': 'https://wowhead.com/affix=3',
            'name': 'Necrotic',

            'description': 'All enemies\' melee attacks apply a stacking blight that inflicts damage over time and reduces healing received.',
        },
    ];
export default data;

